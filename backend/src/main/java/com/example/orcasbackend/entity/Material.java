package com.example.orcasbackend.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Material {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "topic")
    private String topic;
    @Basic
    @Column(name = "author")
    private String author;
    @Basic
    @Column(name = "publish_year")
    private int publishYear;
    @Basic
    @Column(name = "publisher")
    private String publisher;
    @Basic
    @Column(name = "subject")
    private String subject;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "url")
    private String url;
    @Basic
    @Column(name = "views")
    private int views;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "publish_date")
    private Date publishDate;
    @Basic
    @Column(name = "ranking_month")
    private String rankingMonth;
    @Basic
    @Column(name = "material_abstract")
    private String materialAbstract;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPublishYear() {
        return publishYear;
    }

    public void setPublishYear(int publishYear) {
        this.publishYear = publishYear;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public String getRankingMonth() {
        return rankingMonth;
    }

    public void setRankingMonth(String rankingMonth) {
        this.rankingMonth = rankingMonth;
    }

    public String getMaterialAbstract() {
        return materialAbstract;
    }

    public void setMaterialAbstract(String materialAbstract) {
        this.materialAbstract = materialAbstract;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Material material = (Material) o;

        if (id != material.id) return false;
        if (publishYear != material.publishYear) return false;
        if (views != material.views) return false;
        if (email != null ? !email.equals(material.email) : material.email != null) return false;
        if (topic != null ? !topic.equals(material.topic) : material.topic != null) return false;
        if (author != null ? !author.equals(material.author) : material.author != null) return false;
        if (publisher != null ? !publisher.equals(material.publisher) : material.publisher != null) return false;
        if (subject != null ? !subject.equals(material.subject) : material.subject != null) return false;
        if (type != null ? !type.equals(material.type) : material.type != null) return false;
        if (url != null ? !url.equals(material.url) : material.url != null) return false;
        if (status != null ? !status.equals(material.status) : material.status != null) return false;
        if (publishDate != null ? !publishDate.equals(material.publishDate) : material.publishDate != null)
            return false;
        if (rankingMonth != null ? !rankingMonth.equals(material.rankingMonth) : material.rankingMonth != null)
            return false;
        if (materialAbstract != null ? !materialAbstract.equals(material.materialAbstract) : material.materialAbstract != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (topic != null ? topic.hashCode() : 0);
        result = 31 * result + (author != null ? author.hashCode() : 0);
        result = 31 * result + publishYear;
        result = 31 * result + (publisher != null ? publisher.hashCode() : 0);
        result = 31 * result + (subject != null ? subject.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (url != null ? url.hashCode() : 0);
        result = 31 * result + views;
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (publishDate != null ? publishDate.hashCode() : 0);
        result = 31 * result + (rankingMonth != null ? rankingMonth.hashCode() : 0);
        result = 31 * result + (materialAbstract != null ? materialAbstract.hashCode() : 0);
        return result;
    }
}
