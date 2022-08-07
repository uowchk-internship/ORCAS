package com.example.orcasbackend.controller.api;

import com.example.orcasbackend.entity.Material;
import com.example.orcasbackend.service.MaterialServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/material")
public class MaterialController {

    private MaterialServices materialServices;

    @Autowired
    public MaterialController(MaterialServices materialServices) {
        this.materialServices = materialServices;
    }

    @PostMapping("/new")
    public String newMaterial(@RequestBody Material material) {
        material.setId(0);
        materialServices.saveMaterial(material);
        return "done";
    }

    @PostMapping("/addCount/{id}")
    public String addViewCount(@PathVariable String id) {
        Material resultMaterial = materialServices.findById(id);
        resultMaterial.setViews(resultMaterial.getViews() + 1);

        materialServices.saveMaterial(resultMaterial);
        return "done";
    }


    @GetMapping("/all")
    public List<Material> getAll() {
        return materialServices.getAll();
    }

    @GetMapping("/findByKeyword/{keyword}")
    public List<Material> findByKeyword(@PathVariable String keyword) {
        return materialServices.findByKeyword(keyword);
    }

    @GetMapping("/findByApproveStatus/{status}")
    public List<Material> findByApproveStatus(@PathVariable String status) {
        return materialServices.findByApproveStatus(status);
    }

    @GetMapping("/findByKeywordAndStatus/{status}/{keyword}")
    public List<Material> findByKeywordAndStatus(@PathVariable String keyword, @PathVariable String status) {
        return materialServices.findByKeywordAndStatus(keyword,status);
    }



}
