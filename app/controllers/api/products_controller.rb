class Api::ProductsController < ApplicationController

  def index
    render json: Product.random_product(current_user.loved)
  end

  def my_products
    render json: User.loved(current_user.loved)
  end

end
