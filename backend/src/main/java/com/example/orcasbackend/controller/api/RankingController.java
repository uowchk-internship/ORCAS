package com.example.orcasbackend.controller.api;

import com.example.orcasbackend.entity.Material;
import com.example.orcasbackend.entity.RankTable;
import com.example.orcasbackend.service.RankingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ranking")
public class RankingController {

    private RankingServices rankingServices;

    @Autowired
    public RankingController(RankingServices rankingServices) {
        this.rankingServices = rankingServices;
    }

    @GetMapping("/all")
    public List<String> getAll() {
        return rankingServices.getAllMonths();
    }

    @GetMapping("/allRankings")
    public List<List<RankTable>> getAllRankings() {
        return rankingServices.getAllMonthRanking();
    }

}
