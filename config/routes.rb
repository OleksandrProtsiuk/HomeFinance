Rails.application.routes.draw do
  get 'static_pages/index'
  get 'static_pages/home'
  get 'static_pages/about'
  resources :transactions
  root 'accounts#index', as: 'root'
  resources :accounts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
