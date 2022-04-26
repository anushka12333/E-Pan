package com.epanrestapi.epanendpoints.model;

// import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String email;
   @Column(name="username")
   private String username;
   @Column(name="password")
   private String password;
  private String phonenumber;
   private String userRole;
   @OneToOne(mappedBy = "user")
   @JsonBackReference
   private Profile profile;
   
public User() {
}

public User(Long id, String email, String username, String password, String phonenumber, String userRole) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.phonenumber = phonenumber;
    this.userRole = userRole;
}

public Long getId() {
    return id;
}
public void setId(Long id) {
    this.id = id;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getUsername() {
    return username;
}
public void setUsername(String username) {
    this.username = username;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
public String getPhonenumber() {
    return phonenumber;
}
public void setPhonenumber(String phonenumber) {
    this.phonenumber = phonenumber;
}
public String getUserRole() {
    return userRole;
}
public void setUserRole(String userRole) {
    this.userRole = userRole;
}

// public Profile getProfile() {
//     return profile;
// }

// public void setProfile(Profile profile) {
//     this.profile = profile;
// }



   


}
