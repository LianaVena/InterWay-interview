package vena.commentwebapp.util;

import vena.commentwebapp.data.Comment;

public final class CommentUtils {

  private CommentUtils() {
  }

  public static boolean isCommentFilled(Comment comment) {
    return !isNullOrEmpty(comment.getName()) && !isNullOrEmpty(comment.getText()) && !isNullOrEmpty(comment.getPin());
  }

  public static String getCommentNotFilledExceptionMessage(Comment comment) {
    StringBuilder message = new StringBuilder("One or more of the following fields are not filled:");
    if (isNullOrEmpty(comment.getName())) {
      message.append("\n • Name");
    }
    if (isNullOrEmpty(comment.getText())) {
      message.append("\n • Text");
    }
    if (isNullOrEmpty(comment.getPin())) {
      message.append("\n • Pin");
    }
    return message.toString();
  }

  private static boolean isNullOrEmpty(String string) {
    return string == null || string.isEmpty();
  }
}
