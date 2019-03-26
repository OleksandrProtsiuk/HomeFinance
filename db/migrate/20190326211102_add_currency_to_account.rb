class AddCurrencyToAccount < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :currency, :string
  end
end
