module ApplicationHelper

  def account_status_hash
    { 'Доходы': 'income', 'Расходы': 'costs', 'Сбережения': 'saved' }
  end

  def account_names_and_ids
    hash = {}
    Account.all.each do |element|
      hash.update(element.title => element.id)
    end
    hash
  end

end
