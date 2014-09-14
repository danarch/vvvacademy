Rails.application.routes.draw do
  root 'static_pages#home'

  # StaticPages routes
  match '/about', to: 'static_pages#about', via: 'get'
  get '/submission', to: 'static_pages#submission'
  get '/rejected', to: 'static_pages#rejected'
  get '/questionreview', to: 'static_pages#questionreview'
  get '/grades', to: 'static_pages#grades'
  get '/gradequiz', to: 'static_pages#gradequiz'
  get '/dashboard', to: 'static_pages#dashboard'
  get '/teacherdashboard', to: 'static_pages#teacherdashboard'
  get '/petitions', to: 'static_pages#petitions'
  devise_for :users



end
