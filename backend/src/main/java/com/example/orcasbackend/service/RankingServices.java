package com.example.orcasbackend.service;

import com.example.orcasbackend.entity.RankTable;

import java.util.List;
import java.util.Map;

public interface RankingServices {
    public List<String> getAllMonths();

    public List<List<RankTable>> getAllMonthRanking();

    public List<String> getMonthRanking(String month);

    public List<String> getOverallRanking();



}
