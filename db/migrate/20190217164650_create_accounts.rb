class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :title
      t.decimal :value
      t.integer :currency
      t.integer :user_id

      t.timestamps
    end
  end
end
