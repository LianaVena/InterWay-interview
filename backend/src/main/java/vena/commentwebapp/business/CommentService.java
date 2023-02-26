package vena.commentwebapp.business;

import org.springframework.stereotype.Service;
import vena.commentwebapp.data.Comment;
import vena.commentwebapp.data.CommentRepository;
import vena.commentwebapp.util.CommentUtils;

import java.util.List;

@Service
public class CommentService {

  private final CommentRepository commentRepository;

  public CommentService(CommentRepository commentRepository) {
    this.commentRepository = commentRepository;
  }

  /**
   * Get all comments from the database without their pin
   *
   * @return List of Comment objects
   */
  public List<Comment> getAllComments() {
    List<Comment> comments = commentRepository.findAll();
    comments.forEach(comment -> comment.setPin(""));
    return comments;
  }

  /**
   * Add a comment to the database if all fields are filled
   *
   * @param comment Comment object
   * @return true if successfully added, false if not
   */
  public boolean addComment(Comment comment) {
    if (CommentUtils.isCommentFilled(comment)) {
      commentRepository.save(comment);
      return true;
    }
    return false;
  }

  /**
   * Edit comment in database if all fields are filled and correct pin is set
   *
   * @param comment Comment object
   * @return true if successfully edited, false if not
   */
  public boolean editComment(Comment comment) {
    Comment commentInDb = commentRepository.findById(comment.getId()).orElse(null);
    if (commentInDb != null && comment.getPin().equals(commentInDb.getPin()) && CommentUtils.isCommentFilled(comment)) {
      commentInDb.setName(comment.getName());
      commentInDb.setText(comment.getText());
      commentRepository.save(commentInDb);
      return true;
    }
    return false;
  }

  /**
   * Delete comment from the database if correct pin is set
   *
   * @param id  id of comment in database
   * @param pin pin used for editing or deletion
   * @return true if successfully deleted, false if not
   */
  public boolean deleteComment(Long id, String pin) {
    Comment comment = commentRepository.findById(id).orElse(null);
    if (comment != null && comment.getPin().equals(pin)) {
      commentRepository.delete(comment);
      return true;
    }
    return false;
  }

}
