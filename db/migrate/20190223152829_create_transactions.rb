class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :from_acc_id
      t.decimal :from_acc_val
      t.integer :to_acc_id
      t.decimal :to_acc_val
      t.decimal :value
      t.text :comment

      t.timestamps
    end
  end
end
