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

  public Comment findCommentByPin(String pin) {
    commentRepository.fin
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

  public
}
