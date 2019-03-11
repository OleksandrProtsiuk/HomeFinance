class AddColorToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :color, :string
  end
end
