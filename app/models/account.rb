class Account < ApplicationRecord

  enum currency: { 'UAH': 980, 'USD': 840, 'EUR': 978, 'RUB': 643 },
       color: { 'Red': 'lightcoral', 'Blue': 'lightskyblue', 'Green': 'lightgreen',
                'Yellow': 'yellow', 'Pink': 'lightpink', 'Orange': 'orange',
                'Grey': 'lightgrey' }

  validates :title, presence: true, uniqueness: { case_sensitive: false }, length: 1..18
  validates :currency, presence: true
  # validates :user_id, presence: true

end
