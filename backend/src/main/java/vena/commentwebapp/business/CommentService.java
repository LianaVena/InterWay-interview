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

  public List<Comment> getAllComments() {
    return commentRepository.findAll();
  }

  public boolean addComment(Comment comment) {
    if (CommentUtils.isCommentFilled(comment)) {
      commentRepository.save(comment);
      return true;
    }
    return false;
  }

  public boolean deleteComment(Long id, String pin) {
    Comment comment = commentRepository.findById(id).orElse(null);
    if (comment != null && comment.getPin().equals(pin)) {
      commentRepository.delete(comment);
      return true;
    }
    return false;
  }

}
