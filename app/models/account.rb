class Account < ApplicationRecord

  validates :title, presence: true, uniqueness: { case_sensitive: false }, length: 2..120
  validates :value, presence: true
  validates :status, presence: true, inclusion: %w(income costs saved)
  validates :category_id, presence: true

end
