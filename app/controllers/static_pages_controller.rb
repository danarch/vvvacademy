class StaticPagesController < ApplicationController
  def home
  end

  def about
  end

  def submission

  end

  def grades

  end

  def question_review

  end

  def quiz

  end

  def rejected
    @comment = params[:comment] ? params[:comment] : "There was no comment"
  end

  def dashboard

  end

  def grade_quiz
  end

  def teacher_dashboard
  end

  def petitions
  end

  def parent
  end

  def lesson
  end

end
