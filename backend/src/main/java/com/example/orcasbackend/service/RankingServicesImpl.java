package com.example.orcasbackend.service;

import com.example.orcasbackend.dao.RankingDAO;
import com.example.orcasbackend.dao.RankingDAOService;
import com.example.orcasbackend.entity.RankTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

@Service
public class RankingServicesImpl implements RankingServices {

    private RankingDAOService rankingDAOService;

    @Autowired
    public RankingServicesImpl(RankingDAOService rankingDAOService) {
        this.rankingDAOService = rankingDAOService;
    }

    @Override
    @Transactional
    public List<String> getAllMonths() {
        return rankingDAOService.getAllMonths();
    }

    @Override
    @Transactional
    public List<List<RankTable>> getAllMonthRanking() {
        return rankingDAOService.getAllMonthRanking();
    }

    @Override
    @Transactional
    public List<String> getMonthRanking(String month) {
        return null;
    }

    @Override
    @Transactional
    public List<String> getOverallRanking() {
        return null;
    }


}
