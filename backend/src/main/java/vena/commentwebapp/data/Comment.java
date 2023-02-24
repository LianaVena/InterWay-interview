package vena.commentwebapp.data;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "comment")
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id")
  private int id;

  @Column(name = "name")
  private String name;

  @Column(name = "text")
  private String text;

  @Column(name = "pin")
  private String pin;
}
