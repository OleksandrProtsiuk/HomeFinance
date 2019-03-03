class Account < ApplicationRecord

  enum currency: { 'UAH': 980, 'USD': 840, 'EUR': 978, 'RUB': 643 }

  validates :title, presence: true, uniqueness: { case_sensitive: false }, length: 2..120
  validates :currency, presence: true
  # validates :user_id, presence: true

end
