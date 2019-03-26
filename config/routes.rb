Rails.application.routes.draw do
  resources :categories
  devise_for :users
  root 'static_pages#index', as: 'root'

  get 'static_pages/index'
  get 'static_pages/home'
  get 'static_pages/about'

  resources :transactions
  resources :accounts

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
