class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :account_id
      t.integer :destination_account_id
      t.decimal :amount
      t.decimal :destination_account_amount
      t.text :comment
      t.integer :category_id

      t.timestamps
    end
  end
end
