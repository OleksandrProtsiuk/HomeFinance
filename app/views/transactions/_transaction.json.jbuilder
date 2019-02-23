json.extract! transaction, :id, :from_acc_id, :from_acc_val, :to_acc_id, :to_acc_val, :value, :comment, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
