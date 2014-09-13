Rails.application.routes.draw do
  root 'static_pages#home'

  # StaticPages routes
  match '/about', to: 'static_pages#about', via: 'get'

  devise_for :users
end
