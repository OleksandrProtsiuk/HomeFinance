Rails.application.routes.draw do
  root 'accounts#index', as: 'root'
  resources :accounts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
