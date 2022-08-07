package com.example.orcasbackend.entity;

public class RankTable {
    private String month;
    private int countNumber;
    private String email;

    public RankTable(String month, int countNumber, String email) {
        this.month = month;
        this.countNumber = countNumber;
        this.email = email;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public int getCountNumber() {
        return countNumber;
    }

    public void setCountNumber(int countNumber) {
        this.countNumber = countNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
