"""create tables

Revision ID: d8cbe088ca3c
Revises: 
Create Date: 2023-10-06 10:39:26.632119

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8cbe088ca3c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('enrollment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=255), nullable=True),
    sa.Column('contact', sa.String(length=20), nullable=True),
    sa.Column('course', sa.String(length=255), nullable=True),
    sa.Column('course_id', sa.String(length=10), nullable=True),
    sa.Column('date', sa.String(length=10), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('enrollment')
    # ### end Alembic commands ###
