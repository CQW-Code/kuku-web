Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :products, only: [:index, :update]
    get 'my_products', to: 'products#my_products'
    delete 'my_products/:id', to: 'products#delete'
    put 'products/:id/hate', to: 'products#show_products'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
