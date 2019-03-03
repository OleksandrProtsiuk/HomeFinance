json.extract! transaction, :id, :account_id, :destination_account_id,
              :amount, :destination_account_amount, :comment, :category_id,
              :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
