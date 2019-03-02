class Api::ProductsController < ApplicationController
  before_action :authenticate_user!, only: [:my_products, :update, :delete]
  before_action :set_product, only: [:update, :delete]

  def index
    products = Product.all
    render json: products
  end

  def my_products
    render json: User.loved(current_user.loved_products)
    current_user.save
  end

  def update
    current_user.loved_products << params[:id].to_i
    current_user.save
<<<<<<< HEAD
=======
    render json: current_user
>>>>>>> c5fbb4200af525127abbc22db040b61be1f62182
  end

  def delete
    current_user.loved_products.delete_if{|i| i == @product.id}
    current_user.save
<<<<<<< HEAD
=======
    render json: current_user
>>>>>>> c5fbb4200af525127abbc22db040b61be1f62182
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

end
