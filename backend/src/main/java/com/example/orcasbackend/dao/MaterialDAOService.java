package com.example.orcasbackend.dao;

import com.example.orcasbackend.entity.Material;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;
import java.util.Locale;

@Repository
public class MaterialDAOService implements MaterialDAO {

    private EntityManager entityManager;

    @Autowired
    public MaterialDAOService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void saveMaterial(Material material) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(material);
    }

    @Override
    public List<Material> getAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query query = currentSession.createQuery("FROM Material m ORDER BY m.publishYear DESC", Material.class);
        List<Material> materials = query.getResultList();
        return materials;
    }

    @Override
    public List<Material> findByKeyword(String keyword) {
        Session currentSession = entityManager.unwrap(Session.class);
        keyword = keyword.toLowerCase(Locale.ROOT);
        String hql = "FROM Material m WHERE " +
                "lower(m.topic) like '%" + keyword + "%' OR " +
                "lower(m.author) like '%" + keyword + "%' OR " +
                "lower(m.publisher) like '%" + keyword + "%' ORDER BY m.publishYear DESC";
        Query query = currentSession.createQuery(hql, Material.class);
        List<Material> materials = query.getResultList();

        System.out.println(materials);
        return materials;
    }

    @Override
    public Material findById(String id) {
        Session currentSession = entityManager.unwrap(Session.class);
        String hql = "FROM Material m WHERE m.id = " + id;
        Query query = currentSession.createQuery(hql, Material.class);
        Material material = (Material) query.getSingleResult();

        System.out.println(material);
        return material;
    }

    @Override
    public List<Material> findByApproveStatus(String status) {
        Session currentSession = entityManager.unwrap(Session.class);
        String hql = "FROM Material m WHERE m.status = '" + status + "' ORDER BY m.publishYear DESC";
        Query query = currentSession.createQuery(hql, Material.class);
        List<Material> materials = query.getResultList();

        System.out.println(materials);
        return materials;
    }

    @Override
    public List<Material> findByKeywordAndStatus(String keyword, String status) {
        Session currentSession = entityManager.unwrap(Session.class);
        keyword = keyword.toLowerCase(Locale.ROOT);
        String hql = "FROM Material m WHERE m.status = '" + status + "' AND ( " +
                "lower(m.topic) like '%" + keyword + "%' OR " +
                "lower(m.author) like '%" + keyword + "%' OR " +
                "lower(m.publisher) like '%" + keyword + "%' ) ORDER BY m.publishYear DESC";
        Query query = currentSession.createQuery(hql, Material.class);
        List<Material> materials = query.getResultList();

        System.out.println(materials);
        return materials;
    }

    @Override
    public void deleteById(String id) {
        Session currentSession = entityManager.unwrap(Session.class);
        String hql = "DELETE FROM Material m WHERE m.id = " + id;
        Query query = currentSession.createQuery(hql);
        query.executeUpdate();
    }
}
