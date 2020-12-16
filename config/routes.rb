Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :clips, only: [:create, :destroy, :show, :index]
    resources :channels, only: [:show, :index]
    resources :categories, only: [:index, :show]
    resources :messages, only: [:show]
  end

  root "static_pages#root"
end
