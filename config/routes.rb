
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resources :videos, only: [:index, :show, :new, :create, :destroy, :update] do
      resource :likes, only: [:index, :show, :create, :destroy]
    end
    resources :channels, only: [:index, :show, :new, :create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end
end