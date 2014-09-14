class StaticPagesController < ApplicationController
  def home
  end

  def about
  end

  def submission

  end


  def grades

  end

  def reviews

  end

  def quiz

  end

  def rejected
    @comment = params[:comment] ? params[:comment] : "There was no comment"
  end

  def dashboard
  end
end
