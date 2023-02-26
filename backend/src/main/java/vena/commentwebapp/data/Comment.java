package vena.commentwebapp.data;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "comment")
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private long id;

  /**
   * Commenters name
   */
  @Column(name = "name")
  private String name;

  /**
   * Content of comment
   */
  @Column(name = "text")
  private String text;

  /**
   * Pin for editing or deleting comments
   */
  @Column(name = "pin")
  private String pin;
}
