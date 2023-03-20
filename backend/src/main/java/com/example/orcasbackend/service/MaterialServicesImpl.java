package com.example.orcasbackend.service;

import com.example.orcasbackend.dao.MaterialDAOService;
import com.example.orcasbackend.entity.Material;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class MaterialServicesImpl implements MaterialServices{

    private MaterialDAOService materialDAOService;

    @Autowired
    public MaterialServicesImpl(MaterialDAOService materialDAOService) {
        this.materialDAOService = materialDAOService;
    }

    @Override
    @Transactional
    public void saveMaterial(Material material) {
        materialDAOService.saveMaterial(material);
    }

    @Override
    @Transactional
    public List<Material> getAll() {
        return materialDAOService.getAll();
    }

    @Override
    @Transactional
    public List<Material> findByKeyword(String keyword) {
        return materialDAOService.findByKeyword(keyword);
    }

    @Override
    @Transactional
    public Material findById(String id){
        return materialDAOService.findById(id);
    }

    @Override
    @Transactional
    public List<Material> findByApproveStatus(String status) {
        return materialDAOService.findByApproveStatus(status);
    }

    @Override
    @Transactional
    public List<Material> findByKeywordAndStatus(String keyword, String status) {
        return materialDAOService.findByKeywordAndStatus(keyword,status);
    }

    @Override
    @Transactional
    public void deleteById(String id){
        materialDAOService.deleteById(id);
    }

    @Override
    @Transactional
    public Material getRandomMaterialOfKind(String kind){
        return materialDAOService.getRandomMaterialOfKind(kind);
    }
}
