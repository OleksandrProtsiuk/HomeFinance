class Transaction < ApplicationRecord

  validates :comment, length: 0..300

end
