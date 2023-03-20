package com.example.orcasbackend.dao;

import com.example.orcasbackend.entity.Material;

import java.util.List;

public interface MaterialDAO {

    public void saveMaterial(Material material);

    public List<Material> getAll();

    public List<Material> findByKeyword(String keyword);

    public Material findById(String id);

    public List<Material> findByApproveStatus(String status);

    public List<Material> findByKeywordAndStatus(String keyword, String status);

    public void deleteById(String id);

    public Material getRandomMaterialOfKind(String kind);

}
