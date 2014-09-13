Rails.application.routes.draw do
  root 'static_pages#home'

  # StaticPages routes
  match '/about', to: 'static_pages#about', via: 'get'
  get '/submission', to: 'static_pages#submission'
  get '/review', to: 'static_pages#submission'
  get '/grades', to: 'static_pages#grades'
  devise_for :users
end
