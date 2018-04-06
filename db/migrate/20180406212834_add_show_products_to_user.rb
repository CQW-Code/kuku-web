class AddShowProductsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :show_products, :boolean
  end
end
