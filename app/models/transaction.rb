class Transaction < ApplicationRecord

  validates :from_acc_id, presence: true, numericality: { only_integer: true }
  # validates :from_acc_val, presence: true

  validates :to_acc_id, presence: true, numericality: { only_integer: true }
  # validates :to_acc_val, presence: true

  validates :value, presence: true
  validates :comment, length: 0..300

end
