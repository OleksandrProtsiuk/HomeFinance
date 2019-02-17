class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :title
      t.decimal :value
      t.string :status
      t.integer :category_id

      t.timestamps
    end
  end
end
