package com.example.orcasbackend.dao;

import com.example.orcasbackend.entity.Material;
import com.example.orcasbackend.entity.RankTable;

import java.util.List;
import java.util.Map;

public interface RankingDAO {

    public List<String> getAllMonths();

    public List<List<RankTable>> getAllMonthRanking();

    public List<Material> getMonthRanking(String month);

    public List<String> getOverallRanking();



}
