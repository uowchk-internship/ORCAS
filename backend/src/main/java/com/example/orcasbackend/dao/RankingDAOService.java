package com.example.orcasbackend.dao;

import com.example.orcasbackend.entity.Material;
import com.example.orcasbackend.entity.RankTable;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.*;
import java.util.stream.Collectors;

@Repository
public class RankingDAOService implements RankingDAO {

    private EntityManager entityManager;

    @Autowired
    public RankingDAOService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<String> getAllMonths() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query query = currentSession.createQuery("SELECT DISTINCT  m.rankingMonth " +
                "FROM Material m", String.class);
        List<String> months = query.getResultList();
        return months;
    }

    public List<List<RankTable>> getAllMonthRanking() {
        List<List<RankTable>> rankTableOfAllMonths = new ArrayList<>();
        Map<String, Integer> completeCount = new HashMap<>();

        List<String> allMonths = getAllMonths();
        for (String month : allMonths) {
            List<RankTable> rankTableOfCurrentMonth = new ArrayList<>();

            //Get all counts
            List<Material> monthRanking = getMonthRanking(month);
            Map<String, Integer> count = new HashMap<>();

            //Ranking per month
            for (Material single : monthRanking) {
                if (single.getStatus().equals("approve") && !single.getEmail().equals("admin")) {
                    if (count.get(single.getEmail()) == null) {
                        count.put(single.getEmail(), 1);
                    } else {
                        count.put(single.getEmail(), count.get(single.getEmail()) + 1);
                    }

                    //add to completeCount
                    if (completeCount.get(single.getEmail()) == null) {
                        completeCount.put(single.getEmail(), 1);
                    } else {
                        completeCount.put(single.getEmail(), completeCount.get(single.getEmail()) + 1);
                    }

                }
            }

            for (String key : count.keySet()) {
                rankTableOfCurrentMonth.add(new RankTable(month, count.get(key), key));
            }

            rankTableOfAllMonths.add(rankTableOfCurrentMonth.stream().
                    sorted(Comparator.comparing(RankTable::getCountNumber).reversed())
                    .collect(Collectors.toList())
            );


        }

        //Calculate overall
        List<RankTable> overallTable = new ArrayList<>();

        for (String key : completeCount.keySet()) {
            overallTable.add(new RankTable("overall", completeCount.get(key), key));
        }

        rankTableOfAllMonths.add(overallTable.stream().
                sorted(Comparator.comparing(RankTable::getCountNumber).reversed())
                .collect(Collectors.toList())
        );


        return rankTableOfAllMonths;
    }


    @Override
    public List<Material> getMonthRanking(String month) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query query = currentSession.createQuery("FROM Material m WHERE m.rankingMonth = '" + month + "'", Material.class);
        List<Material> months = query.getResultList();
        return months;
    }

    @Override
    public List<String> getOverallRanking() {
        return null;
    }
}
