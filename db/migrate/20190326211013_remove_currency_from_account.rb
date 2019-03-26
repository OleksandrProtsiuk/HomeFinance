class RemoveCurrencyFromAccount < ActiveRecord::Migration[5.2]
  def change
    remove_column :accounts, :currency, :integer
  end
end
