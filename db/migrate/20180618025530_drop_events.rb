class DropEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :tests do |t|

      t.timestamps
  end
end
