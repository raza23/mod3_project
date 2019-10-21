class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :level
      t.string :image_src

      t.timestamps
    end
  end
end
