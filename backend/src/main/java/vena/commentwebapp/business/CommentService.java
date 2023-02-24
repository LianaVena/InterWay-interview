package vena.commentwebapp.business;

import org.springframework.stereotype.Service;
import vena.commentwebapp.data.Comment;
import vena.commentwebapp.data.CommentRepository;

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
}
