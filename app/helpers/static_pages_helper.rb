require 'open-uri'

module StaticPagesHelper

  def current_currency
    result = {}
    uri = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=3'
    doc = Nokogiri::XML(open(uri))
    doc.xpath('//exchangerate').each do |element|
      result.merge!(element.attributes["ccy"].value.to_sym => element.attributes["buy"].value.to_f)
    end
    result.delete_if { |key| key == :BTC }
  end

end
