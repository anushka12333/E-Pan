package com.epanrestapi.epanendpoints.model;

import javax.persistence.CascadeType;
// import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
// import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
// import javax.persistence.JoinColumn;
// import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

//import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="Profile")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;     
    @Column(name="first_name")
    private String firstName;
    @Column(name="middle_name")
    private  String  middleName ;
    @Column(name="last_name")
    private String lastName ;
    private  String address;
    private String email;
    private String mobile;
    @JoinColumn(name="User_id")
    @OneToOne(cascade = CascadeType.ALL)
    @JsonManagedReference
   private User user;

    
    public Profile() {
    }
    
    
    public Profile(Long id, String firstName, String middleName, String lastName, String address, String email,
            String mobile,User user) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.mobile = mobile;
        this.user=user;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getMiddleName() {
        return middleName;
    }
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }


    public User getUser() {
        return user;
    }
    @OneToOne()
    public void setUser(User user) {
        this.user = user;
    }
    



}
