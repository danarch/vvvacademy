Rails.application.routes.draw do
  root 'static_pages#home'

  # StaticPages routes
  match '/about', to: 'static_pages#about', via: 'get'
  get '/submission', to: 'static_pages#submission'
  get '/rejected', to: 'static_pages#rejected'
  get '/question_review', to: 'static_pages#question_review'
  get '/grades', to: 'static_pages#grades'
  get '/quiz', to: 'static_pages#quiz'
  get '/grade_quiz', to: 'static_pages#grade_quiz'
  get '/dashboard', to: 'static_pages#dashboard'
  get '/teacher_dashboard', to: 'static_pages#teacher_dashboard'
  get '/petitions', to: 'static_pages#petitions'
  get '/quiz', to: 'static_pages#quiz'
  devise_for :users
end
